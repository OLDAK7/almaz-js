console.log("Hello, Almaz!");

function reverse(s) {
    return s && s[s.length - 1] + reverse(s.slice(0, -1))
}

console.log(reverse("motherFucker"));