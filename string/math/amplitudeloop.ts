import "../string/scattermatrix"
import "../string/wuwuMatrix"
import "../string/tennetMatrix"
interface AmplitudeMatrix {
    [key: number]: { [key: number]: number };
}
export function createAmplitudeMatrix(): AmplitudeMatrix {
    const matrix: AmplitudeMatrix = {};
    for (let i = 0; i < 10; i++) {
        matrix[i] = {};
        for (let j = 0; j < 10; j++) {
            matrix[i][j] = Math.random() * 100;
        }
    }
    return matrix;
}
export function printMatrix(matrix: AmplitudeMatrix): void {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            (`${matrix[i][j]} `);
        }
    }
}
export const amplitudeMatrix = createAmplitudeMatrix();
printMatrix(amplitudeMatrix);