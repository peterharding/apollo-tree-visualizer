import * as React from "react";
import "./Hello.css";

export interface IWelcomeProps {
  name: string;
  enthusiasmLevel?: number;
}

export function Hello({ name, enthusiasmLevel = 1 }: IWelcomeProps) {
  if (enthusiasmLevel <= 0) {
    throw new Error("You could be a little more enthusiastic. :D");
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
    </div>
  );
}

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join("!");
}

/* could be
class Hello extends React.Component<Props, object> {
  render() {
    const { name, enthusiasmLevel = 1 } = this.props;

    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(enthusiasmLevel)}
        </div>
      </div>
    );
  }
}
*/
