import { DatePickerContainer } from '../../../../lib/DatePicker'
import { InputContainer } from '../../components/input'
import { LabelContainer } from '../../components/label'

export type ContainerProps = {
	/**
	 * date (YYYY-MM-DD)
	 */
	date: string
	/**
	 * activity list
	 */
	activities: string[]
}

type Props = ContainerProps
export type StyledProps = Props

const Component: React.VFC<Props> = (props) => {
	const _date = new Date(props.date)
	return (
		<div className="space-y-2">
			{/* date: add parent div to avoid space between label and date */}
			<div>
				<LabelContainer label="日付" />
				<DatePickerContainer
					selected={_date}
					onChange={(e) => {
						// console.debug(e)
					}}
				/>
			</div>
			{/* activity list */}
			{props.activities === null || props.activities === undefined ? (
				<></>
			) : (
				<div>
					<LabelContainer label="アクティビティ" />
					{props.activities.map((e) => {
						const id = `${props.date}-activity-${e}`
						return (
							<InputContainer
								key={e}
								value={e}
								id={id}
								placeHolder="アクティビティ"
								onChange={(e) => {
									console.debug(e)
								}}
							/>
						)
					})}
					{/* TODO: ボタン押下でアクティビティ追加 */}
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
						追加
					</button>
				</div>
			)}
		</div>
	)
}

export const StyledComponent: React.VFC<StyledProps> = (props) => {
	return <Component date={props.date} activities={props.activities} />
}

export const Container: React.VFC<ContainerProps> = (props) => {
	return <StyledComponent date={props.date} activities={props.activities} />
}
