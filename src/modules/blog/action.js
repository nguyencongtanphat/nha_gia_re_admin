import { redirect } from 'react-router-dom';
import ApiService from '../../service/ApiService';

export async function action({ request, params }) {
  try {
    const formData = await request.formData();
    const type = formData.get('type');
    console.log('type: ', type);
    if (type === 'create') {
      const body = {
        title: formData.get('title'),
        short_description: formData.get('description'),
        author: formData.get('author'),
        thumbnail: formData.get('thumbnail'),
        content: formData.get('content'),
      };
      console.log('body: ', body);
      const res = await ApiService.post({ url: 'blogs', data: body });
      console.log('res: ', res);
      return redirect('/blogs');
    }
  } catch (err) {
    alert(err.message);
  }

  //   } else if (type === 'delete') {
  //     try {
  //       const id = data.get('id');
  //       console.log('delete request');
  //       const result = await ApiService.delete({ url: `developers/${id}` });
  //       console.log('delete results', result);
  //       if (result.status == 'success') {
  //         alert('delete success');
  //       } else {
  //         alert('error');
  //       }
  //       return null;
  //     } catch (e) {
  //       console.log(e);
  //       alert(e);
  //       return null;
  //     }
  //   } else if (type === 'edit') {
  //     const data = Object.fromEntries(formData);
  //     const images = JSON.parse(data.images);
  //     const id = data.id;
  //     //extract url list from form
  //     const imagePaths = images.map((image) => {
  //       if (image.url) return image.url;
  //       return image.response;
  //     });
  //     //assign again for data
  //     data.images = imagePaths;
  //     const result = await ApiService.patch({
  //       url: `developers/${id}`,
  //       data: data,
  //     });
  //   }

  //   return null;
}
