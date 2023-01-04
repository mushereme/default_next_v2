import axios from "../axios";
import https from "https";

export const loadApi = async (props) => {
    
  let query, subqueries;
  
  var config = {
    url: props.url,
    method: props.method,
    header: {
      headers: {
        "Content-Type": "application/json"
      },
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    },
    data: {
      ...props.parameters
    }
  };

  if(props.query) {
    let queries = props.query.split('&');
    queries.map((item, index) => {
      subqueries = item.split(':');
      if( index == 0) {
        query = '?' + subqueries[0] + '=' + subqueries[1];
      } else (
        query = query + '&' + subqueries[0] + '=' + subqueries[1]
      )
    })

    config.url = config.url + query;
  }
  
  return await new Promise(async (resolve, reject) => {
    await axios(config).then((resp) => {
      resolve(resp?.data?.data || {});
    }).catch((err) => {
      reject(err.response?.data?.error);
    })
  });
};