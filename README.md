# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


Saved PDF:
<Accordion type="single" collapsible className="gap-2 w-full max-w-5xl">
        <AccordionItem value="item-1">
          {/* Tiêu đề bài viết */}
          <AccordionTrigger style={{ color: "red" }}>
            Các vấn đề thường gặp của máy kiểm code KT11 (J5)
          </AccordionTrigger>
          {/* Nội dung bài viết */}
          <AccordionContent>
            <img src="" alt="" />
            <Button
              type="submit"
              className="shad-button_primary whitespace-nowrap"
              onClick={() => {downloadPDF(pdfFile)}}
            >
              <SlCloudDownload />Tải xuống file PDF đầy đủ
            </Button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            <Button
              type="submit"
              className="shad-button_primary whitespace-nowrap"
              onClick={() => {downloadPDF(pdfFile1)}}
            >
              <SlCloudDownload />Tải xuống file PDF đầy đủ
            </Button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            <Button
              type="submit"
              className="shad-button_primary whitespace-nowrap"
              onClick={() => {downloadPDF(pdfFile1)}}
            >
              <SlCloudDownload />Tải xuống file PDF đầy đủ
            </Button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>