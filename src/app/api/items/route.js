import { stringify } from "postcss";

export async function GET() { 
  // 1. To get access token 
  const token = await getToken();
  // 2. To get data from TDX api 
  //console.log("Access Token:", token);
  const apiData = await fetchData(token);
  return Response.json(apiData);
}

async function getToken() {
    const authUrl = 'https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token';
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    params.append('client_id', process.env.TDX_CLIENT_ID);
    params.append('client_secret', process.env.TDX_CLIENT_SECRET);

    try {
        //console.log("Request Params:", params.toString());
        const response = await fetch(authUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: params,
        });
        if (response.ok) {
            const data = await response.json();
            //console.log("Token Response:", JSON.stringify(data));
            console.log("Get Token Success");
            return data.access_token;
        } else {
            console.error("Error fetching token:", response.status, response.statusText);
        }
    } catch (error) {
        console.error("Error fetching token:", error);
    }
    return null;
}

async function fetchData(token) {
    const apiUrl = 'https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/YunlinCounty?%24top=3&%24format=JSON';

    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const data = await response.json();
            //console.log("API Data Response:", JSON.stringify(data));
            console.log("Get Data Success");
            return data;
        } else {
            console.error('Error fetching data:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    return null;
}
