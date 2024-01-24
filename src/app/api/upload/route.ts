export async function POST(req: Response) {
  const data = (await req.formData())
  if(data.get('file')) {
    console.log('we have file', data.get('file'));
    // TODO upload file
  }
  // temporary decision
  const link = 'https://i.postimg.cc/BZHxNBcM/cat.jpg'
  return Response.json(link);
}