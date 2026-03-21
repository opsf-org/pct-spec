VERSION ?= v0.1
DATE    ?= $(shell date +'%B %Y')
OUTPUT  ?= pct-spec-$(VERSION).pdf

.PHONY: pdf clean

pdf: $(OUTPUT)

$(OUTPUT): SPEC.md .github/spec-pdf/template.tex .github/spec-pdf/table-style.lua
	awk 'NR==1{print;next} /^## Abstract$$/{found=1} !found{next} /^## Table of Contents$$/{toc=1;next} toc&&/^---$$/{toc=0;next} toc{next} {print}' SPEC.md | \
	pandoc -f markdown \
		--template=.github/spec-pdf/template.tex \
		--pdf-engine=pdflatex \
		--shift-heading-level-by=-1 \
		--lua-filter=.github/spec-pdf/table-style.lua \
		--highlight-style=tango \
		--toc \
		--toc-depth=3 \
		-V version="$(VERSION)" \
		-V date="$(DATE)" \
		-o $(OUTPUT)
	@echo "Built $(OUTPUT)"

clean:
	rm -f pct-spec-*.pdf
