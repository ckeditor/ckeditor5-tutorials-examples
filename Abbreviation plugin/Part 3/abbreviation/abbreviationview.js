import {
	View,
	LabeledFieldView,
	createLabeledInputText,
	ButtonView,
	submitHandler,
	FocusCycler
} from '@ckeditor/ckeditor5-ui';
import { FocusTracker, KeystrokeHandler } from '@ckeditor/ckeditor5-utils';
import { icons } from '@ckeditor/ckeditor5-core';

export default class FormView extends View {
	constructor( locale ) {
		super( locale );

		const t = locale.t;
		this.focusTracker = new FocusTracker();
		this.keystrokes = new KeystrokeHandler();

		this.abbrInputView = this._createInput( t( 'Add abbreviation' ) );
		this.titleInputView = this._createInput( t( 'Add title' ) );

		this.saveButtonView = this._createButton( t( 'Save' ), icons.check, 'ck-button-save' );

		// Submit type of the button will trigger the submit event on entire form when clicked 
		//(see submitHandler() in render() below).
		this.saveButtonView.type = 'submit';

		this.cancelButtonView = this._createButton( t( 'Cancel' ), icons.cancel, 'ck-button-cancel' );

		// Delegate ButtonView#execute to FormView#cancel.
		this.cancelButtonView.delegate( 'execute' ).to( this, 'cancel' );

		this.childViews = this.createCollection( [
			this.abbrInputView,
			this.titleInputView,
			this.saveButtonView,
			this.cancelButtonView
		] );

		this._focusCycler = new FocusCycler( {
			focusables: this.childViews,
			focusTracker: this.focusTracker,
			keystrokeHandler: this.keystrokes,
			actions: {
				// Navigate form fields backwards using the Shift + Tab keystroke.
				focusPrevious: 'shift + tab',

				// Navigate form fields forwards using the Tab key.
				focusNext: 'tab'
			}
		} );

		this.setTemplate( {
			tag: 'form',
			attributes: {
				class: [ 'ck', 'ck-abbr-form' ],
				tabindex: '-1'
			},
			children: this.childViews
		} );
	}

	render() {
		super.render();

		submitHandler( {
			view: this
		} );

		this.childViews._items.forEach( view => {
			// Register the view in the focus tracker.
			this.focusTracker.add( view.element );
		} );

		// Start listening for the keystrokes coming from #element.
		this.keystrokes.listenTo( this.element );
	}

	destroy() {
		super.destroy();

		this.focusTracker.destroy();
		this.keystrokes.destroy();
	}

	focus() {
		// If the abbreviation text field is enabled, focus it straight away to allow the user to type.
		if ( this.abbrInputView.isEnabled ) {
			this.abbrInputView.focus();
		}
		// Focus the abbreviation title field if the former is disabled.
		else {
			this.titleInputView.focus();
		}
	}

	_createInput( label ) {
		const labeledInput = new LabeledFieldView( this.locale, createLabeledInputText );

		labeledInput.label = label;

		return labeledInput;
	}

	_createButton( label, icon, className ) {
		const button = new ButtonView( this.locale );

		button.set( {
			label,
			icon,
			tooltip: true,
			class: className
		} );

		return button;
	}
}