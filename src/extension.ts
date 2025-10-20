import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "ligaboxvscode" is now active!');

	let disposable = vscode.commands.registerCommand('ligaboxvscode.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from LigaBox VS Code!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
