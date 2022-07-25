/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

// A helper function that retrieves and concatenates all text within the model range.
export default function getRangeText( range ) {
	return Array.from( range.getItems() ).reduce( ( rangeText, node ) => {
		if ( !( node.is( 'text' ) || node.is( 'textProxy' ) ) ) {
			return rangeText;
		}

		return rangeText + node.data;
	}, '' );
}
