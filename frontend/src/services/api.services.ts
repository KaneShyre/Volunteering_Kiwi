import axios from "axios"

const geoKey = "e6a641561b2d46419b38a68dcf8ece7a";

class ApiService {

geo={
	getCoord: (city: string, country: string) => {
		const query = [] as any
		if (!!city) query.push("city=" + city)
		if (!!country) query.push("country=" + country)
		return axios.get(`https://nominatim.openstreetmap.org/search.php/?${query.join("&")}&polygon_geojson=1&format=json`)
	}
}

}

export  default new ApiService();
