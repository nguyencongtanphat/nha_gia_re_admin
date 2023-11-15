import { redirect } from 'react-router-dom';
import ApiService from '../../service/ApiService';

export async function action({ request, params }) {
  const data = await request.formData();
  const body = {
    name: data.get('name'),
    description: data.get('description'),
    images: [],
  };
  const res = await ApiService.post({ url: 'developers', data: body });
  console.log('ress:', res);
  return null;
}
