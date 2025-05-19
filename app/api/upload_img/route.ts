import { NextRequest, NextResponse } from "next/server"
import { verify } from "@/app/api/auth/jsonwebtoken"


export async function POST (request: NextRequest) {
    try {
      const token:string|null = request.headers.get('Authorization')
      const IMGAPIKEY: string|null = process.env.IMG_APIKEY || null
      if (!IMGAPIKEY) throw new Error('Error: variable de entorno APIKEY no definida')

      if (token) {
        const result = verify(token)
        if (result.success) {
          const formData = await request.formData()
          
          const response = await fetch(`https://api.imgbb.com/1/upload?expiration=0&key=${IMGAPIKEY}`,{
            method: 'post',
            body: formData
            })
          const result = await response.json()

          if (result.success) {
            const parsed_to_local_scheme = {
              id: result.data.id,
              image: result.data.image.url,
              thumb: result.data.thumb.url
            }
            return NextResponse.json({ success: true, data: parsed_to_local_scheme })
          }
          if (result.error) {
            throw new Error(result.error) 
          }
          
        }
        if (result.error) throw new Error('Error: jsonwebtoken inválido')
      }
      throw new Error('Error: default')

    } catch (error) {
      console.log("Error en api/crud/create:")
      console.log(error)
      return NextResponse.json({ succes: false, error }) 
    }
}



/* objeto de respuesta de carga correcta: api imagen
          {
            data: {
              id: 'd4n6nmf7',
              title: 'curvas',
              url_viewer: 'https://ibb.co/d4n6nmf7',
              url: 'https://i.ibb.co/4RBMB1FJ/curvas.png',
              display_url: 'https://i.ibb.co/4RBMB1FJ/curvas.png',
              width: 629,
              height: 316,
              size: 27606,
              time: 1745432057,
              expiration: 0,
              image: {
                filename: 'curvas.png',
                name: 'curvas',
                mime: 'image/png',
                extension: 'png',
                url: 'https://i.ibb.co/4RBMB1FJ/curvas.png'
              },
              thumb: {
                filename: 'curvas.png',
                name: 'curvas',
                mime: 'image/png',
                extension: 'png',
                url: 'https://i.ibb.co/d4n6nmf7/curvas.png'
              },
              delete_url: 'https://ibb.co/d4n6nmf7/dca61e84d43db00b2ef646529ab66984'
            },

            {
            }
            success: true,
            status: 200
          }
        
          */