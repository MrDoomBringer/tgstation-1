import { useBackend } from '../backend';
import { Box, Button, LabeledList, ProgressBar, Section } from '../components';
import { Window } from '../layouts';

export const Microscope = (props, context) => {
  const { act, data } = useBackend(context);
  const organisms = data.oranisms || [];
  const viruses = data.viruses || [];
  return (
    <Window resizable>
      <Window.Content scrollable>
        <Section>
          <h2>Micro_Organisms</h2>
          <LabeledList>
            {organisms.map(organism => (
              <LabeledList.Item key={organism.name} label={organism.name}>
                Description: {organism.desc}
                <br />
                Required Reagents: [<b>{organism.requireds}</b>]
                <br />
                Supplementary Reagents: [<b>{organism.supplementaries}</b>]
                <br />
                Suppressive Reagents: [<b>{organism.suppressives}</b>]
                <br />
              </LabeledList.Item>
            ))}
          </LabeledList>
        </Section>
        <Section>
          <h2>Viruses</h2>
          <LabeledList>
            {viruses.map(virus => (
              <LabeledList.Item key={organism.name} label={organism.name}>
                Description: {organism.desc}
                <br />
                Required Reagents: [<b>{organism.requireds}</b>]
                <br />
                Supplementary Reagents: [<b>{organism.supplementaries}</b>]
                <br />
                Suppressive Reagents: [<b>{organism.suppressives}</b>]
                <br />
              </LabeledList.Item>
            ))}
          </LabeledList>
        </Section>
      </Window.Content>
    </Window>
  );
};
