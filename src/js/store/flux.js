const getState = ({ getStore, getActions, setStore }) => {
	return {
	 store: {
	  characters: []
	 },
	 actions: {
	  // Use getActions to call a function within a fuction
	  loadCharacters: () => {
	   fetch("https://www.swapi.tech/api/people/")
		.then(res => res.json())
		.then(data => {setStore({characters: data.results})})
		.then(()=> console.log(getStore().characters))
		.catch(err => console.error(err))
	   /**
		fetch().then().then(data => setStore({ "foo": data.bar }))
	   */
	  },
	  getCharacterByID: async characterID => {
		const characterEndPoint = `https://www.swapi.tech/api/people/${characterID}`
		const response = await fetch(characterEndPoint);
		const data = await response.json();
		setStore({ characters: data.result.properties });
		return data.result.properties.find(character => true);
	},
	 }
	};
   };
   
   export default getState;
