ZIP_CMD=/usr/bin/zip -r
RM_CMD=/bin/rm
PACKAGE_NAME=jira-external-links
ZIP_NAME=$(PACKAGE_NAME).zip
CONTENT=js/* manifest.json README.md LICENSE.md


build:
		$(ZIP_CMD) $(ZIP_NAME) $(CONTENT)

clean:
		$(RM_CMD) $(ZIP_NAME)