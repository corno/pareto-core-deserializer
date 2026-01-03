import * as _pinternals from "pareto-core-internals"

/**
 * these functions coming from core-internals should be exposed for deserializer development
 */
export {
    block,
    unreachable_code_path,
    iterate,
} from "pareto-core-internals"

export namespace text {

    export const build = _pinternals.text_build
}

export namespace list {

    export const build = _pinternals.list_build
    export const from_text = _pinternals.list_from_text

}

export namespace integer {

    export const divide = _pinternals.integer_divide

}
