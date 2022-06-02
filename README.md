
# Release process
1. get to the `release` branch and update it with `master`
   ```shell
    git checkout -b release
    git reset --hard master
   ```
2. run the release-it script `npm run release`
   make decision on wether it is a major, minor or bugfix release. Follow with default answers `Y`
3. open PR from `release` to `master`
4. once PR is merged the changes are automatically deployed to `production`
