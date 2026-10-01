import { SaveIcon } from "lucide-react";
import { Container } from "../../components/Container";
import { DefaultButton } from "../../components/DefaultButton";
import { DefaultInput } from "../../components/DefaultInput";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";

export function Settings() {
  return (
    <MainTemplate>
      <Container>
        <Heading>Configurações</Heading>
      </Container>
      <Container>
        <p style={{ textAlign: "center" }}>
          Modifique as configurações para tempo de foco, descanso curto e
          descanso longo
        </p>
      </Container>

      <Container>
        <form action="" className="form">
          <div className="formRow">
            <DefaultInput id="workTime" labelText="Foco" />
          </div>

          <div className="formRow">
            <DefaultInput id="shortBreakTime" labelText="Descanso Curto" />
          </div>

          <div className="formRow">
            <DefaultInput id="longBreakTime" labelText="Descanso Longo" />
          </div>

          <div className="formRow">
            <DefaultButton
              icon={<SaveIcon />}
              aria-label="Salvar Configurações"
              title="Salvar Configurações"
            />
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
}
