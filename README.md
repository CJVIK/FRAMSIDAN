# Framsidan

- Multiple pages:
	- Baksidan (kakrecept)
	- Framsidan (start)
	- Högersidan (om oss)
	- Vänstersidan (kontakt)
	- Undersidan (portfolio/case)(Merge pull request #14 from CJVIK/dev)

## Commit-regler

- Subject + body using Vim-formatted commit messages.
- Capital letter in beginning of subject line.
- Commit should contain a _what_ and _why_. For example, place the _what_ in subject line, and the _why_ in the body.
- Clear signalling words in beginning of subject line: update, add, delete

## Git-flow

- No pushes to main or dev, branches only.
- Feature-branches syntax: f-\<part name\>-\<task category\> (i.e f-footer-styling); kebab-case.
- Release-branches syntax: r-\<version number\> (i.e r-v0.0.1).
- Use same name for tag in Github.
- When dev is updated and ones feature branch has no pushed commits, use rebase or cherry-pick to get latest changes from dev. Otherwise use a merge if the update is important to ones feature or wait until it's finished and just do a PR.

## PR-rutiner

- Before issuing a PR, merge dev to feature branch and solve potential conflicts.
- Follow commit rules in the message about the pull request.
- Create pull request for finished features to be merged.
- Reviewer checks code using checklist (definition of done).
- If problems: leave comment/request changes in the pull request.
- Else: approve and merge to dev.
- Alert team of changes in dev and delete the feature-branch.

## Definition of Done

- [ ] Good variable names:
    - [ ] camelCase (JS)
    - [ ] Purposeful names - easy to understand
- [ ] Validating code
- [ ] Semantic HTML
	- [ ] Self-sustained containers: article
	- [ ] Dependant containers: section
	- [ ] Other containers: div

### Template: Definition of Done

\- \[ \] Good variable names:\
&emsp;\- \[ \] camelCase (JS)\
&emsp;\- \[ \] Purposeful names - easy to understand\
\- \[ \] Validating code\
\- \[ \] Semantic HTML:\
&emsp;\- \[ \] Self-sustained containers: article\
&emsp;\- \[ \] Dependant containers: section\
&emsp;\- \[ \] Other containers: div
