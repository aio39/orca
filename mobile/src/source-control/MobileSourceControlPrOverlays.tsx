import { View } from 'react-native'
import { MobilePrTabSheets } from '../components/pr-sidebar/MobilePrTabSheets'
import { PrTabScreenView } from '../components/pr-sidebar/PrTabScreenView'
import type { MobilePrTab, PrTabScreen } from '../components/pr-sidebar/use-mobile-pr-tab'
import { hubStyles } from './mobile-source-control-hub-styles'
import type { MobileDiffFileTarget } from './use-mobile-source-control-openers'

// What the PR tab lays over the hub: its sheets, and the Checks or Comments screen a gate opened.
export function MobileSourceControlPrOverlays({
  prTab,
  prScreen,
  onCloseScreen,
  bottomInset,
  openDiffForFile
}: {
  prTab: MobilePrTab
  prScreen: PrTabScreen | null
  onCloseScreen: () => void
  bottomInset: number
  openDiffForFile: (target: MobileDiffFileTarget) => void
}) {
  return (
    <>
      <MobilePrTabSheets tab={prTab} />
      {prScreen ? (
        <View style={hubStyles.screenLayer}>
          <PrTabScreenView
            screen={prScreen}
            tab={prTab}
            onBack={onCloseScreen}
            bottomInset={bottomInset}
            onOpenFile={(filePath) =>
              openDiffForFile({ kind: 'changes', filePath, area: 'branch' })
            }
          />
        </View>
      ) : null}
    </>
  )
}
