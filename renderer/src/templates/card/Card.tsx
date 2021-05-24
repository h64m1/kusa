import { DatePicker } from '../../../../lib/DatePicker'
import { Input, InputContainer } from '../../components/input'
import { LabelContainer } from '../../components/label'

type Props = {
	/**
	 * date (YYYY-MM-DD)
	 */
	date: string
	/**
	 * activity list
	 */
	activities: string[]
}

export type StyledProps = Props

const Component: React.VFC<Props> = (props) => {
	const _date = new Date(props.date)
	return (
		<div className="space-y-2">
			{/* date: add parent div to avoid space between label and date */}
			<div>
				<LabelContainer label="日付" />
				<DatePicker
					selected={_date}
					onChange={(e) => {
						console.debug(e)
					}}
				/>
			</div>
			{/* activity list */}
			<div>
				<LabelContainer label="アクティビティ" />
				{props.activities.map((e) => {
					return (
						<InputContainer
							key={e}
							value={e}
							id={`activity${e}`}
							placeHolder="アクティビティ"
						/>
					)
				})}
			</div>
		</div>
	)
}

export const StyledComponent: React.VFC<StyledProps> = (props) => {
	return <Component date={props.date} activities={props.activities} />
}
