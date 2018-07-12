 function mapChooser(locationName){
   if (!locationName)
    locationName = "default"
   let image = locationName + ".jpg"
   return (image)
 }

 export default mapChooser
