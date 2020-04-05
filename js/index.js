let url = prompt("Enter URL");

function result(url) {
  let toProtocol = url.search("//");
  let protocol = url.substring(0, toProtocol);

  url = url.slice(toProtocol + 2);

  let toDomen = url.search("/");

  let domen;

  if (toDomen === -1) {
    return `Protocol: ${protocol}<br> Domen: ${url}`;
  } else {
    domen = url.substring(0, toDomen);
  }

  url = url.slice(toDomen);

  if (url === "/") {
    return `Protocol: ${protocol}<br> Domen: ${domen}`;
  } else {
    return `Protocol: ${protocol}<br> Domen: ${domen}<br> Path: ${url}`;
  }
}

document.write(result(url));
