import Link from "next/link";
import { Rating } from "./Rating";


interface ProductDetails {
    id: number;
    title: string;
    description: string;
    thumbnailURL: string;
    thumbnailALT: string;
    rating: number;
   
  };
//type ProductListItem = Pick<ProductDetails,
// 'title'| 'thumbnailURL' | 'thumbnailALT'>;

interface ProductProps {
  data: ProductDetails;
}
  export const ProductDetails = ({ data }: ProductProps) => {
  return (
<>
    <img src={data.thumbnailURL} alt={data.thumbnailALT}></img>
    <h2 className="p-4 text-3xl font-bold">{data.title}</h2>
    
</>
  );
  };
  type ProductListItem = Pick<ProductDetails,
  'id' | 'title'| 'thumbnailURL' | 'thumbnailALT'>;
 
  interface ProductListItemsProps {
    data: ProductListItem;
  }
  export const ProductListItem = ({ data }: ProductProps) => {
    return (
  <>
      <img src={data.thumbnailURL} alt={data.thumbnailALT}></img>
      <Link href={'/products/${dataId}'}>
        <a>
      <h2 className="p-4 text-3xl font-bold">{data.title}</h2>   
      </a>
      </Link>
  </>
    );
    };
  
