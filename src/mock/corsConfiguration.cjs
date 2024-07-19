import { getReadableString } from "../../utils/getReadeableString";

export const configCors = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/cors_config', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        const data = await response.json();
        const corsConfig = await getReadableString(data.account) ;
        return corsConfig;
      } else {
        console.error('Failed to config cors');
        return '';
      }
    } catch (error) {
      console.error('Error:', error);
      return '';
    }
  };
  
  