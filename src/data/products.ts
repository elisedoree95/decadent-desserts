import crepes_nature from '../img/product_images/crepes_nature.jpg'
import crepes_choco from '../img/product_images/crepes_chocolat.jpg'
import gaufres from '../img/product_images/gaufres.jpeg'
import pancakes from '../img/product_images/pancakes.jpg'
import cupcakes_fraise from '../img/product_images/cupcakes_fraise.jpg'
import cupcakes_raisin from '../img/product_images/cupcakes_raisin.jpg'
import beignets_sucre from '../img/product_images/beignets_sucre.jpg'
import beignets_creme from '../img/product_images/beignets_creme.jpeg'
import tarte_meringue from '../img/product_images/tarte_meringue.jpg'
import gateau_marbre from '../img/product_images/gateau_marbre.jpeg'


export type Product = {
    id: number
    name: string
    price: number
    imageUrl?: string
}

export const products: Product[] = [
    {id: 1, name: 'Crêpe nature', price: 200, imageUrl: crepes_nature},
    {id: 2, name: 'Crêpe choco', price: 300, imageUrl: crepes_choco},
    {id: 3, name: 'Gaufre', price: 500, imageUrl: gaufres},
    {id: 4, name: 'Pancake', price: 250, imageUrl: pancakes},
    {id: 5, name: 'Cupcake fraise', price: 400, imageUrl: cupcakes_fraise},
    {id: 6, name: 'Cupcake raisins', price: 400, imageUrl: cupcakes_raisin},
    {id: 7, name: 'Beignet sucré', price: 80, imageUrl: beignets_sucre},
    {id: 8, name: 'Beignet crème', price: 150, imageUrl: beignets_creme},
    {id: 9, name: 'Tarte meringue', price: 2500, imageUrl: tarte_meringue},
    {id: 10, name: 'Gâteau marbré', price: 8000, imageUrl: gateau_marbre},
]