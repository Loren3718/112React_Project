import { stringify } from "postcss";

export async function GET()
{ // 1. To get access token 
    const token = await getToken();
  // 2. To get data from TDX api 
  console.log(token);
  const apiData = await fetchdata(token);
  return Response.json({});

}

async function getToken()
{
    const authUrl = 'https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token';
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    params.append('client_id', process.env.TDX_CLIENT_ID);
    params.append('client_secret', process.env.TDX_CLIENT_SECERT);

    try 
    {
        const response = await fetch(authUrl,{
            method: 'POST',
            headers:{
                'Content-type' : 'application/x-www-form-urlencoded',
            },
            body : params,
        })
        if (response.ok)
        {
            const data = await response.json();
            console.log(JSON.stringify(data));
            return data.access_token;
        }
        else
        {
            console.error("Error fetching token:",response.status);
        }
    }
    catch (error)
    {
        console.log("Error fetching token:",error);
    }

    return null ;
}

async function fetchdata(token)
{
    const apiUrl = 'https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token' ;

    try 
    {
        const response = await fetch(apiUrl,{
            method: 'GET',
            headers:{
                Authorization:`Bearer ${token}`,
                'Content-type' : 'application/json',
            },
        });

        if (response.ok)
        {
            const data = await response.json();
            console.log(JSON.stringify(data));
            return data ;

        }
        else 
        {
            console.error('Error fetching data :' , response.status);
        }
    }
    catch(error)
    {
        console.error('Error fetching data :' , error);
    }
    return null ;
}