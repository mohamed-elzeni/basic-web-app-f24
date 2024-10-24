export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrew id")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ( "msmohame" );
  }

  if (query.toLowerCase().includes("name")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ( "msmohame" );
  }

  if (query.toLowerCase().includes("what is") && query.toLowerCase().includes("plus")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    let ns = query.match('\d+');
    if (ns == null) {
      return "nope";
    }
    else {
      console.log(ns);
      let res = parseInt(ns[0]) + parseInt(ns[1]);
      return res.toString();
    } 
  }

  return "";
}
