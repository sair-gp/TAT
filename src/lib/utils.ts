import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Define un tipo para las entradas que acepta clsx,
// que puede ser cualquier valor de clase de Tailwind.
// ClassValue se importa de 'clsx'.
type ClassNames = ClassValue[];

/**
 * Combina condicionalmente múltiples nombres de clase,
 * y luego los fusiona usando twMerge para resolver conflictos de Tailwind CSS.
 * * @param inputs Un array de nombres de clase o valores condicionales.
 * @returns Una cadena única de nombres de clase sin conflictos.
 */
export const cn = (...inputs: ClassNames) => {
  return twMerge(clsx(inputs));
};
