# 🐻 SNIPPETS-MISIE 🐻

## ❗️ I just wanna use

- In VSCode View -> Command Palette `cmd` + `shift` + `P` and type `snippets`. Choose option `Preferences: Configure User Snippets`:

![VScode edit snippets command](https://github.com/lebrande/snippets-misie/blob/master/assets/vscode-edit-snippets-command.png "VScode edit snippets command")

- Select language:

![Choose code language from list](https://github.com/lebrande/snippets-misie/blob/master/assets/lang-list.png "Choose code language from list")

- Now a `<lang>.json` has been opened. Paste code from according file in `snippets` folder.

![Edit file view](https://github.com/lebrande/snippets-misie/blob/master/assets/edit-file.png "Edit file view")

- Open a file which you want to use your snippet in and try to use `prefix` from one of them. In example below that's `log`.

![Use a snippet](https://github.com/lebrande/snippets-misie/blob/master/assets/usage.png "Use a snippet")
- Done.

### 🤓 How to develop?

- Place your snippets for any language you want according filename in `snippets` folder.
- Each snippet is defined under a snippet name and has a prefix, body and description. 
- The prefix is what is used to trigger the snippet and the body will be expanded and inserted.
- Possible variables are: `$1`, `$2` for tab stops, `$0` for the final cursor position, and `${1:label}`, `${2:another}` for placeholders.
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