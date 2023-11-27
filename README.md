# Lab github action javaScript

## Travail a faire 

- Validation de pullrequest avec node.js et javaScript en github action

## Prerequis 
-lab-nodejs

## Les commandes utilisés

```shell
npm init -y
npm install @actions/core
npm install @actions/github
npm i -g @vercel/ncc
git tag -a -m "My first action release" v1.1
git push --follow-tags


```
## Example usage

```yaml
uses: actions/hello-world-javascript-action@e76147da8e5c81eaf017dede5645551d4b94427b
with:
  who-to-greet: 'Mona the Octocat'
```

## References

- https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action
- [Hello, World! JavaScript Action](https://github.com/actions/hello-world-javascript-action)