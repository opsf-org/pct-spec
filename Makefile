VERSION ?= v0.1
DATE    ?= $(shell date +'%B %Y')
OUTPUT  ?= pct-spec-$(VERSION).pdf

.PHONY: pdf clean

pdf: $(OUTPUT)

$(OUTPUT): SPEC.md .github/spec-pdf/template.tex
	sed '/^## Table of Contents$$/,/^---$$/{d;}' SPEC.md | \
	pandoc -f markdown \
		--template=.github/spec-pdf/template.tex \
		--pdf-engine=pdflatex \
		--highlight-style=tango \
		--toc \
		--toc-depth=3 \
		-V version="$(VERSION)" \
		-V date="$(DATE)" \
		-o $(OUTPUT)
	@echo "Built $(OUTPUT)"

clean:
	rm -f pct-spec-*.pdf
