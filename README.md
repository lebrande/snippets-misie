# 🐻 SNIPPETS-MISIE 🐻

# ❗️ I just wanna use
- ![VScode edit snippets command](https://github.com/lebrande/snippets-misie/blob/master/assets/vscode-edit-snippets-command.png "VScode edit snippets command")
- ![VScode edit snippets command](https://github.com/lebrande/snippets-misie/blob/master/assets/lang-list.png "VScode edit snippets command")
- 
- Now a `<lang>.json` file should be open. Paste code from according file in `snippets` folder

### 🤓 How to develop?

- Place your snippets for any language you want according filename in `snippets` folder.
- Each snippet is defined under a snippet name and has a prefix, body and description. 
- The prefix is what is used to trigger the snippet and the body will be expanded and inserted.
- Possible variables are: $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders.
- Placeholders with the same ids are connected.

### 👉 Example:

```json
"Print to console": {
	"prefix": "log",
	"body": [
		"console.log('$1');",
		"$2"
	],
	"description": "Log output to console"
}
```

### 📣 Helpful section

- Cool tool [snippet-generator.app](https://snippet-generator.app/)
- Tutorial [Traversy Media - Code Faster With Custom VS Code Snippets](https://www.youtube.com/watch?v=JIqk9UxgKEc)

### ❓ FAQ:

- Q: Can I commit some code and create PR?
- A: Yup.