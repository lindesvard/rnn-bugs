import {
  Navigation,
  OptionsModalPresentationStyle,
} from 'react-native-navigation';

const tabs = ['Tab1', 'Tab2', 'Tab3', 'Tab4', 'Tab5', 'Tab6', 'Tab7'];

const options = () => ({
  options: {
    animations: {
      push: {
        enabled: true,
        waitForRender: false,
      },
      pop: {
        enabled: true,
        waitForRender: false,
      },
    },
  },
});

export const setRoot = (componentId) =>
  Navigation.setRoot({
    root: {
      stack: {
        id: `stack:${componentId}`,
        children: [
          {
            component: {
              id: componentId,
              name: componentId,
            },
          },
        ],
      },
    },
  });

export const setTabs = () =>
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'BOTTOM_TABS',
        children: tabs.map((tabName) => ({
          stack: {
            id: `TAB:${tabName}`,
            children: [
              {
                component: {
                  id: tabName,
                  name: tabName,
                },
              },
            ],
            options: {
              bottomTab: {
                text: tabName,
              },
            },
          },
        })),
      },
    },
  });

export const push = (fromComponentId, toComponentId, passProps) =>
  Navigation.push(fromComponentId, {
    component: {
      id: toComponentId,
      name: toComponentId,
      passProps,
      ...options(),
    },
  });

export const popTo = (toComponentId) => Navigation.popTo(toComponentId);

export const openModal = (componentId, passProps) =>
  Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            id: componentId,
            name: componentId,
            passProps,
            options: {
              modalPresentationStyle:
                OptionsModalPresentationStyle.overCurrentContext,
              layout: {
                backgroundColor: 'transparent',
                componentBackgroundColor: 'transparent',
              },
              animations: {
                showModal: {
                  enabled: false,
                  enter: {
                    enabled: false,
                  },
                  exit: {
                    enabled: false,
                  },
                },
                dismissModal: {
                  enabled: false,
                  enter: {
                    enabled: false,
                  },
                  exit: {
                    enabled: false,
                  },
                },
              },
            },
          },
        },
      ],
    },
  });

export const closeModal = (componentId) => Navigation.dismissModal(componentId);
