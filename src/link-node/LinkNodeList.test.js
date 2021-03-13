import LinkNodeList from "./LinkNodeList";

test("LinkNodeList print", () => {
  let linkNodeList = new LinkNodeList();
  linkNodeList.append("1");
  linkNodeList.append("2");
  linkNodeList.append("3");
  linkNodeList.append("4");
  linkNodeList.append("5");

  let ret = linkNodeList.print();
  expect(ret).toBe("1=>2=>3=>4=>5");
});

test("LinkNodeList removeAt", () => {
  let linkNodeList = new LinkNodeList();
  linkNodeList.append("1");
  linkNodeList.append("2");
  linkNodeList.append("3");
  linkNodeList.append("4");
  linkNodeList.append("5");

  linkNodeList.removeAt(3);

  let ret = linkNodeList.print();
  expect(ret).toBe("1=>2=>3=>5");
});
