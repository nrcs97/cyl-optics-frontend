export default function getAgeFromUTCDate(birthDate=undefined){
    if (!birthDate) return birthDate
    const currentDate = new Date().toLocaleDateString().split('/')
        .reverse().map(number => parseInt(number))
    birthDate = birthDate.split('-').map(number => parseInt(number))
    console.log(currentDate)
    console.log(birthDate)
    let age = 0
    if (birthDate[0] < currentDate[0]){
        if (birthDate[1] < currentDate[1]) age += currentDate[0] - birthDate[0]
        else if (birthDate[1] > currentDate[1]) age += currentDate[0] - birthDate[0] -1
        else {
            if (birthDate[2] < currentDate[2]) age += currentDate[0] - birthDate[0]
            else age += currentDate[0] - birthDate[0] -1
        }
    }
    return age.toString()
}