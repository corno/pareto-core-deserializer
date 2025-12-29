/**
 * these functions coming from core-internals should be exposed for serializer development
 */
export {
    // build_text, probably not needed
    build_list,
    panic as unreachable_code_path,
    integer_division,
    text_to_character_list,
    create_iterator,
} from "pareto-core-internals"

