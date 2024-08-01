
const [cartItems, setCartItems] = useState([]);
const [tempCart,setTempCart] = useState(cart);
const [totalAmount,setTotalAmount] = useState(0);
const [loading,setLoading] = useState(true);
const keys_array = Object.keys(tempCart);

useEffect(function(){
  setTempCart(cart);
},[cart])

useEffect(function(){
  setLoading(true);
  const promise = keys_array.map(function(id){
    return getProductData(id);
  });

  const mainPromise = Promise.all(promise);
  mainPromise.then(function(products){
    setCartItems(products);
    setLoading(false);
  });
},[tempCart])

useEffect(function(){
  let total = 0;
  for(let i=0;i<cartItems.length;i++){
    let item = cartItems[i];
    total += parseFloat(item.price *  tempCart[item.id]).toFixed(2);
  }
  setTotalAmount(total);
},[cartItems])


if(cartItems.length==0){
  return (
      <div className='self-center flex flex-col gap-3'>
        <ImSpinner6 className='text-6xl animate-spin'/>
        <h1 className="text-2xl">Please Wait or Add any Items</h1>
      </div>
  )
 }
function handleUpdate(){
  const x = {...tempCart};
  recentCart(x);
}

function handleRemove(prodId){
  setLoading(true);
  const newCart = {...tempCart};
  delete newCart[prodId];
  setTempCart(newCart);
}
function handleChange(prodId,val){
  const newCart = {...tempCart,[prodId]:val};
  console.log(prodId," ",val);
  if(val >0){
    setTempCart(newCart);
  }
  
}