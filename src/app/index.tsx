/* eslint-disable react/jsx-no-comment-textnodes */
import { View, Text, StyleSheet } from 'react-native'

const Index = (): JSX.Element => {
    return (
        <View style={styles.container}>
            // ヘッダ
            <View>
                <View>
                    <Text>カレンダー</Text>
                    <Text>レベル</Text>
                    <Text>グラフ</Text>
                </View>
            </View>
            //コンテンツ
            <View>
                <View>
                    <Text>カレンダー</Text>
                </View>
                <View>
                    <Text>サブコンテンツ</Text>
                </View>
            </View>
            //フッタ
            <View>
                <View>
                    <Text>フッタ</Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Index
