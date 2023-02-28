const apiKey =
	'sH369UFRIcC6Z0ecRvYPAOn0pUkOjwkN6giPKVcgWbdzD0b4U8EJoLqccf1tDckYUrSriy890_-pSc2jbjXOfdFsd6DMgpAu9ueVYqSTZFM4LIKgijyEkzRLGdH9Y3Yx';

const Yelp = {
	search(term, location, sortBy) {
		// In your own browser, visit https://cors-anywhere.herokuapp.com/corsdemo and click “Request temporary access to the demo server”
		return fetch(
			`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
			{
				headers: {
					Authorization: `Bearer ${apiKey}`,
				},
			}
		)
			.then((response) => {
				return response.json();
			})
			.then((jsonResponse) => {
				if (jsonResponse.businesses) {
					return jsonResponse.businesses.map((business) => {
						return {
							id: business.id,
							imageSrc: business.image_url,
							name: business.name,
							address: business.location.address1,
							city: business.location.city,
							state: business.location.state,
							zipCode: business.location.zip_code,
							category: business.categories[0].title,
							rating: business.rating,
							reviewCount: business.review_count,
						};
					});
				}
			});
	},
};

export default Yelp;
