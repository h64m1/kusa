import { DatePickerContainer } from '../../../../lib/DatePicker'
import { InputContainer } from '../../components/input'
import { LabelContainer } from '../../components/label'
import * as Presenter from './presenter'

export type ContainerProps = {
	/**
	 * date (YYYY-MM-DD)
	 */
	date: string
}

type Props = {
	/**
	 * Custom hook
	 */
	hook: Presenter.UseActivitiesReturnType
} & ContainerProps
export type StyledProps = Props

const Component: React.VFC<Props> = (props) => {
	const hook = props.hook
	const _date = new Date(props.date)
	return (
		<div className="space-y-2">
			{/* date: add parent div to avoid space between label and date */}
			<div>
				<LabelContainer label="日付" />
				<DatePickerContainer
					selected={_date}
					// TODO: add onChange action to store date from date-picker
					onChange={() => {
						// console.debug(e)
					}}
				/>
			</div>
			{/* activity list */}
			{hook.activities === null || hook.activities === undefined ? (
				<></>
			) : (
				<div>
					<LabelContainer label="アクティビティ" />
					{hook.activities.map((activity, i) => {
						const id = `${props.date}-activity-${i}`
						return (
							<div key={i} className="flex flex-row space-x-1">
								<InputContainer
									value={activity}
									id={id}
									placeHolder="アクティビティ"
									onChange={(e) => {
										hook.changeActivity(i, e.target.value)
									}}
								/>
								{/* ボタン押下でアクティビティ削除 | TODO: Replace Del to trash icon */}
								<button
									className="hover:bg-gray-50 font-bold py-2 px-3 rounded w-1/12 text-left"
									onClick={() => {
										hook.removeActivity(i)
									}}
								>
									Del
								</button>
							</div>
						)
					})}
					{/* ボタン押下でアクティビティ追加 */}
					<button
						className="hover:bg-gray-100 font-bold py-2 px-4 rounded w-10/12 text-left"
						onClick={() => {
							hook.pushActivity()
						}}
					>
						+ New
					</button>
				</div>
			)}
		</div>
	)
}

export const StyledComponent: React.VFC<StyledProps> = (props) => {
	return <Component date={props.date} hook={props.hook} />
}

export const Container: React.VFC<ContainerProps> = (props) => {
	const hook = Presenter.useActivities([])

	return <StyledComponent date={props.date} hook={hook} />
}
