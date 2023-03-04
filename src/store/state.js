import cats from '../model/cats'
import dogs from '../model/dogs'

export default {
  cats,
  dogs,
  pets: [...cats, ...dogs]
}