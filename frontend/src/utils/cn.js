/**
 * Utility function to merge Tailwind CSS classes
 * Similar to clsx but simplified for our use case
 */
// export function cn(...classes) {
//   return classes.filter(Boolean).join(' ');
// }







/**
 * Utility function to merge Tailwind CSS classes
 * Similar to clsx but simplified for our use case
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}


