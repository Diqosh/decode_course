class MarvelService{
     getResource = async (url) => {
        let res = await fetch(url);
        if (!res.ok){
            throw new Error(`Could not fetch ${url}, status ${res.status}`)
        }

        return await res.json()
    }


    getAllCharacters = () => {
         return this.getResource('https://gateway.marvel.com:443/v1/public/characters?apikey=f6121017bca086bda68e46b209cb670d')
    }

}

export default MarvelService