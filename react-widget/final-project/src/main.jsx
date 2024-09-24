import ReactDOM from 'react-dom/client';
import App from './app';

// Render the <App> in the <div class="app"></div> element found in the DOM.
ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
	<App
		// Feeding the application with predefined products.
		// In a real-life application, this sort of data would be loaded
		// from a database. To keep this tutorial simple, a few
		// hard–coded product definitions will be used.
		products={ [
			{
				id: 1,
				name: 'Colors of summer in Poland',
				price: '$1500',
				image: 'fields.jpg'
			},
			{
				id: 2,
				name: 'Mediterranean sun on Malta',
				price: '$1899',
				image: 'malta.jpg'
			},
			{
				id: 3,
				name: 'Tastes of Asia',
				price: '$2599',
				image: 'umbrellas.jpg'
			},
			{
				id: 4,
				name: 'Exotic India',
				price: '$2200',
				image: 'tajmahal.jpg'
			}
		] }
	/>
);
