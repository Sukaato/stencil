/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface TestCmp {
    }
}
declare global {
    interface HTMLTestCmpElement extends Components.TestCmp, HTMLStencilElement {
    }
    var HTMLTestCmpElement: {
        prototype: HTMLTestCmpElement;
        new (): HTMLTestCmpElement;
    };
    interface HTMLElementTagNameMap {
        "test-cmp": HTMLTestCmpElement;
    }
}
declare namespace LocalJSX {
    interface TestCmp {
    }
    interface IntrinsicElements {
        "test-cmp": TestCmp;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "test-cmp": LocalJSX.TestCmp & JSXBase.HTMLAttributes<HTMLTestCmpElement>;
        }
    }
}