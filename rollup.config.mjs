import path from 'path';
import { fileURLToPath } from 'url';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const entryPoint = path.resolve(__dirname, 'src', 'index.ts');
const outputEsmPoint = path.resolve(__dirname, 'dist', 'esm');
const outputCjsPoint = path.resolve(__dirname, 'dist', 'cjs');

/**
 * @param output {import('rollup').OutputOptions}
 * @returns {import('rollup').RollupOptions}
 * */
const config = (output) => ({
    input: entryPoint,

    output: {
        ...output,

        name: 'uni-sharedui',

        /** Минификация вспомогательного кода  */
        compact: true,

        /** Разделение на чанки, чтобы работал tree shaking */
        preserveModules: true,

        /** Не оборачиваем конечный билд в директорию src */
        preserveModulesRoot: 'src',

        /** Для дебага */
        sourcemap: true,
    },

    // TODO описать функцию для вычисления зависимостей
    /** Нужно для того, чтобы не тянуть за собой лишние зависимости,
     * в идеале прописывается функция, которая это все делает
     * */
    external: ['storybook'],

    plugins: [
        typescript({
            tsconfig: 'tsconfig.json',
            useTsconfigDeclarationDir: output.format !== 'es',
            tsconfigOverride: { declaration: output.format === 'es' },
        }),

        // TODO добавить экспорт css переменных
        // TODO для работы css переменных нужно в каждом файле вставлять импорт главного файла, не решил, но нужно подумать!
        postcss({
            /** Если не поставить false, то не будет работать наш конфиг */
            autoModules: false,
            modules: {
                /** Будет генерировать префикс для всех стилей в библиотеке */
                generateScopedName: 'uni_sharedui_[local]___[hash:base64:7]',
            },
        }),

        // TODO раздавать шрифты из библиотеки, но также модифицировать пути в стилях к этим шрифтам
        // copy({
        //     targets: [{ src: 'src/styles/fonts/sources/**/*', dest: 'dist/fonts' }],
        //     verbose: true,
        // }),
        // TODO экспортировать в формате .css
        // TODO экспорт переменных, костыль? :)
        copy({
            targets: [{ src: 'src/styles/variables/global.scss', dest: 'dist/esm' }],
        }),
    ],
});

export default [
    config({ dir: outputCjsPoint, format: 'cjs', esModule: true }),
    config({ dir: outputEsmPoint, format: 'es' }),
];
