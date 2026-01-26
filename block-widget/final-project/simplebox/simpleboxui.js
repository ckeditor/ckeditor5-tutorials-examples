import { ButtonView, SwitchButtonView, Plugin } from 'ckeditor5';

export default class SimpleBoxUI extends Plugin {
	init() {
		console.log( 'SimpleBoxUI#init() got called' );

		const editor = this.editor;
		const t = editor.t;

		// The "simpleBox" button must be registered among the UI components of the editor
		// to be displayed in the toolbar.
		editor.ui.componentFactory.add( 'simpleBox', locale => {
			// The state of the button will be bound to the widget command.
			const command = editor.commands.get( 'insertSimpleBox' );

			// The button will be an instance of ButtonView.
			const buttonView = new ButtonView( locale );

			buttonView.set( {
				// The t() function helps localize the editor. All strings enclosed in t() can be
				// translated and change when the language of the editor changes.
				label: t( 'Simple Box' ),
				withText: true,
				tooltip: true
			} );

			// Bind the state of the button to the command.
			buttonView.bind( 'isOn', 'isEnabled' ).to( command, 'value', 'isEnabled' );

			// Execute the command when the button is clicked (executed).
			this.listenTo( buttonView, 'execute', () => editor.execute( 'insertSimpleBox' ) );

			return buttonView;
		} );

		// Register the "secretSimpleBox" switch button for toggling the secret state.
		editor.ui.componentFactory.add( 'secretSimpleBox', locale => {
			const command = editor.commands.get( 'toggleSimpleBoxSecret' );
			const switchButton = new SwitchButtonView( locale );

			switchButton.set( {
				label: t( 'Secret box' ),
				withText: true
			} );

			// Bind the switch's properties to the command.
			switchButton.bind( 'isOn', 'isEnabled' ).to( command, 'value', 'isEnabled' );

			// Execute the command when the switch is toggled.
			// The command will automatically toggle based on its current state.
			this.listenTo( switchButton, 'execute', () => {
				editor.execute( 'toggleSimpleBoxSecret' );
			} );

			return switchButton;
		} );
	}
}
