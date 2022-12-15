const advice = async () => {
    const data = await fetch("https://api.adviceslip.com/advice")
    const actual_data = await data.json()
    // console.log(actual_data)

    document.getElementById("title").innerHTML = `Advice # ${actual_data.slip.id}`
    document.getElementById("text").innerHTML = `" ${actual_data.slip.advice} "`


}

advice()

