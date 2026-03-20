-- table-style.lua — Pandoc Lua filter for branded table styling
-- Navy header row with white text, alternating body row colours,
-- and a light rule between every row.

local function render_inlines(inlines)
  local s = pandoc.write(pandoc.Pandoc({pandoc.Plain(inlines)}), 'latex')
  return (s:gsub('%s+$', ''))
end

local function render_blocks(blocks)
  local s = pandoc.write(pandoc.Pandoc(blocks), 'latex')
  return (s:gsub('%s+$', ''))
end

function Table(tbl)
  local ncols = #tbl.colspecs
  -- Build column specification
  local cols = {}
  for _, spec in ipairs(tbl.colspecs) do
    local align = spec[1]
    local w = spec[2]
    if w and w > 0 then
      local adj = string.format('(\\linewidth - %d\\tabcolsep)', 2 * ncols)
      local ws  = string.format('%s * \\real{%.4f}', adj, w)
      local dir = '\\raggedright'
      if align == 'AlignRight'  then dir = '\\raggedleft'  end
      if align == 'AlignCenter' then dir = '\\centering'   end
      table.insert(cols, string.format('>{%s\\arraybackslash}p{%s}', dir, ws))
    else
      local a = 'l'
      if align == 'AlignRight'  then a = 'r' end
      if align == 'AlignCenter' then a = 'c' end
      table.insert(cols, a)
    end
  end

  local out = {}
  local function add(s) table.insert(out, s) end

  add('\\begin{longtable}[]{@{}' .. table.concat(cols, '') .. '@{}}')

  -- ── Header ──────────────────────────────────────────────
  if #tbl.head.rows > 0 then
    for _, row in ipairs(tbl.head.rows) do
      local cells = {}
      for _, cell in ipairs(row.cells) do
        local txt = render_blocks(cell.contents)
        table.insert(cells, '\\textcolor{white}{\\textbf{' .. txt .. '}}')
      end
      add('\\rowcolor{pctnavy} ' .. table.concat(cells, ' & ') .. ' \\\\')
    end
    add('\\endhead')
    -- Repeated footer for page breaks inside long tables
    add('\\arrayrulecolor{pctnavy}\\bottomrule')
    add('\\endlastfoot')
  end

  -- ── Body rows ───────────────────────────────────────────
  add('\\arrayrulecolor{rulecolor}')
  local row_num = 0
  for _, body in ipairs(tbl.bodies) do
    local total = #body.body
    for i, row in ipairs(body.body) do
      row_num = row_num + 1
      -- Alternating background: even rows get light grey
      if row_num % 2 == 0 then
        add('\\rowcolor{codebg}')
      end
      local cells = {}
      for _, cell in ipairs(row.cells) do
        table.insert(cells, render_blocks(cell.contents))
      end
      add(table.concat(cells, ' & ') .. ' \\\\')
      -- Light rule between every body row
      if i < total then
        add('\\hline')
      end
    end
  end

  add('\\arrayrulecolor{pctnavy}\\bottomrule')
  add('\\end{longtable}')

  return pandoc.RawBlock('latex', table.concat(out, '\n'))
end
