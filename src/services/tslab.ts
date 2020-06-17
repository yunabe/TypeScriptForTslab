// Export internal symbols to tslab.
namespace ts.tslab {
    export function findPrecedingToken(position: number, sourceFile: SourceFile, startNode?: Node, excludeJsdoc?: boolean): Node | undefined {
        return ts.findPrecedingToken(position, sourceFile, startNode, excludeJsdoc);
    }
    export function findNextToken(previousToken: Node, parent: Node, sourceFile: SourceFile): Node | undefined {
        return ts.findNextToken(previousToken, parent, sourceFile);
    }

    export function getCompletionsAtPosition(host: LanguageServiceHost, program: Program, log: (message: string) => void, sourceFile: SourceFile, position: number, preferences: UserPreferences, triggerCharacter: CompletionsTriggerCharacter | undefined): CompletionInfo | undefined {
        return Completions.getCompletionsAtPosition(host, program, log, sourceFile, position, preferences, triggerCharacter);
    }
}
